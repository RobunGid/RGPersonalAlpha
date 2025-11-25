from pydantic import BaseModel

class MessageSchema(BaseModel):
    name: str
    contact: str
    theme: str
    message: str