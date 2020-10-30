# Introdução

O componente que será importado é um menu da área de investimentos.

## Passos

- Coloque o arquivo .npmrc com as credencias do npm privado
- Coloque no package.json: "@step-pagamentos/step-mobile": "0.3.8"
- O componente utilizado será o Home, ele necessita de alguns parametros para funcionar corretamente que são exemplificados abaixo,
o id é o identificador do usuário e o tempToken é o token que será utilizado pela autenticação no futuro end-point criado

```{typescript jsx}
    import {Home} from '@step-pagamentos/step-mobile';

    <Home
      id={1}
      name={'John'}
      cellPhone={'61-123451234'}
      cpf={'529.577.490-56'}
      email={'J2onh@email.com'}
      birthDate={'1999-01-01'}
      tempToken={'correct_temp_token'}
    />

```

### OBS
- O component está usando async-storage com redux para armazenar o tempToken interno da Step para utilização da API
- O component faz uma chamada para autenticação ao inicializar e as outras chamadas criação de objetivos no momento
- Provavelmente por problemas de linking do react-native, será necessário ter algumas bibliotecas no package.json:
  ```
  "@react-native-community/async-storage": "^1.12.0"
  "react-native-gesture-handler": "^1.8.0",
  "react-native-safe-area-context": "^3.1.7",
  "react-native-screens": "^2.10.1",
  "react-native-svg": "^12.1.0"
  ```
