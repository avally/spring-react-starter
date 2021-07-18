import {useCallback, useState} from "react";
import {ACCESS_TOKEN} from "../constants";

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  const request = useCallback(async (options) => {
    setLoading(true)
    try{
      const headers = new Headers({'Content-Type': 'application/json'})
      if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', localStorage.getItem(ACCESS_TOKEN))
      }
      options = {headers, ...options}
      const res = await fetch(options.url, options)
      console.log('response', res)
      const data = await res.json()
      console.log('data', data)
      if (!res.ok) {
        throw new Error(data.message)
      }
      return data
    }  finally {
      setLoading(false)
    }
  }, [])

  return {loading, request}
}