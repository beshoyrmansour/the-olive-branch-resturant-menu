
import menuData from '@/public/data.json'

export const loadMenuData = async () => {
  return new Promise((resolve, reject) => {
    resolve(menuData)
  })
}
