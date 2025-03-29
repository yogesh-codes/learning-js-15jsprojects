
class PredictedException(Exception):
    pass

class InputValidationError(PredictedException):
    pass



class MyResponse():
    def __init__(self,can_proceed=None,result=None,error=None):
        self.can_proceed=can_proceed
        self.result=result
        self.error=error

    def __repr__(self):
        return str(self.__dict__)
    
    def __bool__(self):
        return self.can_proceed

    def details(self):
        return self.__dict__

def calculate_simple_interest(D) -> MyResponse:
    
    def isvalidInput(D):
        
        try:
            for x in ['principal','annual_interest_rate','n_years']:
                if x not in D:
                    raise InputValidationError(f"Expected parameter {x} to exist, unavailable")

                if not isinstance(D[x],(int,float)):
                    raise InputValidationError(f"Expected {x} to be int or float, obtained {x}:{D[x]} which is {type(D[x])}")
                
                if not(D[x]>=0):
                    raise InputValidationError(f"Expected {x} value >=0, obtained {x}:{D[x]}")

            return MyResponse(can_proceed=True,result=(D["principal"],D["annual_interest_rate"],D["n_years"]))
        
        except Exception as e:
            return MyResponse(can_proceed=False,error=e)
        
    
    #Validate input
    input_validation_response=isvalidInput(D)


    if input_validation_response.can_proceed:
        principal,annual_interest_rate,n_years=input_validation_response.result
        interest_amount=principal*annual_interest_rate*n_years

        return MyResponse(can_proceed=True,result=interest_amount)
    else:
        return MyResponse(can_proceed=False,error=input_validation_response.error)
    


answer=calculate_simple_interest({"principal":2000,"annual_interest_rate":-1,"n_years":3})
print(answer)