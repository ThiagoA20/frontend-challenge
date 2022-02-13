import bcrypt
import unittest

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

if __name__ == "__main__":
    unittest.main()
