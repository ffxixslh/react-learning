import { useState, useEffect } from 'react'
import { fetchData } from './api.js'

export function FetchData (url) {
  const [list, setList] = useState(null)
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    let ignore = false
    if (!url) return

    fetchData(url).then((result) => {
      if (!ignore) {
        setList(result)
        setSelectedId(result[0].id)
      }
    })
    return () => {
      ignore = true
    }
  }, [url])

  return [list, selectedId, setSelectedId]
}
