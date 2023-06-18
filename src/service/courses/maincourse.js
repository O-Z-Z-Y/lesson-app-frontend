import axios from '../axios'
import store from '@/store/store'

export async function getAccessList() {
  try {
      const response = await axios.get('/api/v1/jobs/maincourse/access/list')
      store.commit('User/SET_USERACCESSLIST', response.data.accesscourse)
  } catch (error) {
      console.error(error);
  }
}