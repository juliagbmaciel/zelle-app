import { axiosInstance } from './axiosInstance'
import { useDispatch } from 'react-redux';
import { setClientData, setSigned } from '../reducers/actions';





export async function createUser(cpf, password, completeName) {
  console.log("criando usuario...")
  try {
    const responseUser = await axiosInstance.post('auth/users/', {
      cpf: cpf,
      password: password,
      username: completeName
    });
    return responseUser.data;
  } catch (error) {
    console.log("erro ao criar usuario...")
    throw error;
  }
}

export async function createClient(name, socialName, dateOfBirth, token) {
  try {
    console.log('criando cliente....', token)
    console.log(name, socialName, dateOfBirth)

    const responseClient = await axiosInstance.post('clients/', {
      name: name,
      social_name: socialName,
      birthdate: dateOfBirth
    }, { headers: { 'Authorization': `Token ${token}` } });
    return responseClient.data;


  } catch (error) {
    console.log('erro ao criar cliente')
    throw error;
  }
}

export async function getToken(cpf, password) {
  try {
    console.log("fazendo login...")
    const responseToken = await axiosInstance.post('auth/token/login/', {
      cpf: cpf,
      password: password
    });
    return responseToken.data;
  } catch (error) {
    console.log("erro ao fazer login;...")
    throw error;
  }
}




export async function createPhysicalClient(rg, token) {
  try {
    const response = await axiosInstance.post('client-physical/',
      { rg: rg },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    )


    return response.data
  } catch (error) {
    throw error
  }
}

export async function createLegalClient(token,cnpj, inscEstadual, inscMunicipal, ) {
  try {
    const response = await axiosInstance.post('client-legal/',
      { state_registration: inscEstadual,
        municipal_registration: inscMunicipal,
        cnpj: cnpj
      },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    )


    return response.data
  } catch (error) {
    throw error
  }
}

export async function createAccount(token) {
  try {
    const response = await axiosInstance.post('accounts/',
      { type: "Conta Corrente" },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    )
    console.log('criando conta')
    return response.data
  } catch (error) {
    console.log("Deu erro")
    throw error
  }
}

export async function getAccount(token) {

  console.log('aa')
  try {
    const response = await axiosInstance.get('client-all',
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    )
    return response.data
  } catch (error) {
    console.log("Deu erro")
    throw error
  }
}


export async function createCard(token) {
  console.log('aa');
  console.log(token);
  
  try {
    const response = await axiosInstance.post(
      'cards/',
      {},
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log("Deu erro");
    throw error;
  }
}

export async function getCards(token, accountId) {
  try {
    const response = await axiosInstance.get(`cards?account=${accountId}`,
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log("Erro ao buscar cartões")
    throw error
  }
}





