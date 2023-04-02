import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { checkEnvironment, groupArrayByCategory } from '../helpers'
import { Categories, MenuCategory, MenuItem } from '@/models/menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: { data: MenuItem[] }) {
  const grouped = groupArrayByCategory(data);
  return (
    <>
      <Head>
        <title>Plastinian Resturant</title>
        <meta name="description" content="Plastinian resturant menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Fondamento" />
      </Head>
      <main className={styles.container}>
        <header>
          <Image className={styles.logo} src={`/logo.svg`} width='1000' height='130' alt='Plastinian Resturant logo' />
          <Image className={styles.hero} src={`/hero.jpg`} width='100' height='330' alt='Plastinian Resturant logo' />
        </header>
        {grouped.map((cat: MenuCategory) => (<div className={styles.menu} key={`menu_category_${cat}`}>
          <h2 className={styles.menu_group_heading}>
            {Categories[cat.category]}
          </h2>
          <div className={styles.menu_group}>
            {cat.items.map((item: MenuItem) => (
              <div className={styles.menu_item} key={`menu_item_${item.id}`}>
                <div className={styles.top_section}>

                  <Image className={styles.menu_item_image} src={`/Produkty/${item.img}`}
                    alt="Vercel Logo"
                    width={1000}
                    height={1000}
                    priority />
                  {item.isVegan && <span className={styles.vegan}>Veganské</span>}
                </div>
                <h3 className={styles.order_nummber}>#{item.number}</h3>
                <div className={styles.menu_item_text}>
                  <h2 className={styles.menu_item_heading}>
                    <div className={styles.menu_item_heading_name}>
                      <span className={styles.menu_item_name}>{item.cz_name}</span>
                      <span className={styles.menu_item_name_sub}>{item.en_name}</span>
                    </div>
                    <span className={styles.menu_item_price}>
                      <span className={styles.menu_item_price_amount}>{item.price}</span>
                      <span className={styles.menu_item_price_currency}>CZK</span>
                    </span>
                  </h2>
                  {/* <p className={styles.menu_item_description}>{item.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>))}
      </main>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${checkEnvironment()}/data.json`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}