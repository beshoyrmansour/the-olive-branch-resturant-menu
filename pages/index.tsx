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
      <footer className={styles.footer}>

        <div className={styles.footer_top}>
          <div className={styles.footer_top_section}>
            <h3>call <span>us</span></h3>
            <a href='tel:+420602342820'>+420 602 342 820</a>
            <a href='tel:+420602342820'>+420 601 100 029</a>
          </div>

          <div className={styles.footer_top_section}>
            <h3>Find <span>us</span></h3>
            <a href='https://maps.app.goo.gl/Lj9YspNJBbt3D8318?g_st=ic'>Spálená 90/17, 110 00 Nové Město, Czechia
              {/* <div className={styles.map}
                title="Map showing business location."></div> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.0243070229683!2d14.419349692681253!3d50.07944708762389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95aeb20f33f9%3A0x39e0e5ab0d4b3374!2sMr.%20Falafel!5e0!3m2!1sen!2seg!4v1680509042141!5m2!1sen!2seg"
                width="400"
                height="150"
                style={{
                  marginTop: '1rem', border: 'none'
                }}
                allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </a>


          </div>
          <div className={styles.footer_top_section}>
            <h3>Business <span>Hours</span></h3>
            <table itemProp="openingHours"><tbody>
              <tr>
                <th className="x2TOCf">Mon:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Tue:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Wed:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Thu:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Fri:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Sat:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                </td>
              </tr>
              <tr>
                <th className="x2TOCf">Sun:</th>
                <td className="o0m3Qb">
                  <span className="WF8WNe">Closed</span>
                </td>
              </tr>
            </tbody>
            </table>
            {/* <a href='mailto:support@mr-flafel.cz'>support@mr-flafel.cz</a> */}
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.copyright}>
            Copyright © 2023 Palstinian Restaurant - All rights reserved <br /> Designed By: NOUR
          </div>
          <div className={styles.flag_background}>
            <div className={styles.flag_top}></div>
            <div className={styles.flag_middle}></div>
            <div className={styles.flag_triangle}></div>
          </div>

        </div>

      </footer>
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