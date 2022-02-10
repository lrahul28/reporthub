const setItem = (key, value, storageType) => {
  storageType.setItem(key, JSON.stringify(value))
}

const getItem = (key, storageType) => {
  const result = storageType.getItem(key)
  return JSON.parse(result)
}

const setItems = items => {
  items.forEach(value => {
    setItem(value.key, JSON.stringify(value.value), value.storageType)
  })
}

const getItems = items => {
  const itemlist = []
  items.forEach(value => {
    const result = getItem(value.key, value.storageType)
    itemlist.push(JSON.parse(result))
  })
  return itemlist
}

export {getItem, setItem, setItems, getItems}
