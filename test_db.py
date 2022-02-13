# import bcrypt
# import unittest
from server.app import *

print(type(isEmailRegistered("teste@gmail.com")))
print(isEmailRegistered("blabla@teste.com"))


class CriptographyTest(unittest.TestCase):


    def setUp(self):
        self.senha = "123456seven"
        self.salt = bcrypt.gensalt()
        self.senha_criptografada = bcrypt.hashpw(self.senha, self.salt)


    def test_password_encrypt(self):
        self.assertNotEqual(self.senha_criptografada, self.senha)
        self.assertNotEqual(self.senha_criptografada, self.salt)


    def test_password_decrypt(self):
        self.assertEqual(bcrypt.hashpw(self.senha, self.senha_criptografada), self.senha_criptografada)


class EmailIsValidTest(unittest.TestCase):
    
    def test_email_valid(self):
        self.assertTrue(isEmailValid("test@gmail.com"))
    
    def test_email_missing_first_part(self):
        self.assertFalse(isEmailValid("@gmail.com"))
    
    def test_email_missing_last_part(self):
        self.assertFalse(isEmailValid("test@"))


if __name__ == "__main__":
    unittest.main()