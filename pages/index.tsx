import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { checkEnvironment, groupArrayByCategory } from '../helpers'
import { Categories, Categories_en, MenuCategory, MenuItem } from '@/models/menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: { data: MenuItem[] }) {
  const grouped = groupArrayByCategory(data);
  const [lang, setLang] = useState('en')
  return (
    <>
      <Head>
        <title>Plastinian Resturant</title>
        <meta name="description" content="Plastinian resturant menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Fondamento&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.container}>
        <header>
          <Image className={styles.logo} src={`/logo.svg`} width='1000' height='130' alt='Plastinian Resturant logo' />
        </header>
        <div className={styles.langSelector} onClick={() => {
          setLang(prev => prev === 'en' ? 'cz' : 'en')
        }}>
          {lang == 'en' ?
            <img src={'./czech-republic.png'} width={30} height={30} alt='change nemu language' />
            : <img src={'./united-kingdom.png'} width={30} height={30} alt='change nemu language' />
          }
          {/* <span style={{ paddingLeft: '0.6rem' }}>{lang === 'en' ? 'České menu' : 'English menu'}</span> */}
        </div>
        {grouped.map((cat: MenuCategory) => (<div className={styles.menu} key={`menu_category_${cat}`}>
          <h2 className={styles.menu_group_heading}>
            {lang === 'en' ? Categories_en[cat.category] : Categories[cat.category]}
          </h2>
          <div className={styles.menu_group}>
            {cat.items.map((item: MenuItem) => (
              <div className={styles.menu_item} key={`menu_item_${item.id}`}>
                <div className={styles.top_section}>

                  <Image className={styles.menu_item_image} src={`/Produkty/${item.img}`}
                    alt={`${item.en_name} - ${item.cz_name}`}
                    width={1000}
                    height={1000}
                    priority />
                  {item.isVegan && <span className={styles.vegan}>{lang === 'en' ? 'Vegetarian' : 'Vegetariánský'}</span>}
                </div>
                {/* <h3 className={styles.order_nummber}>#{item.number}</h3> */}
                <div className={styles.menu_item_text}>
                  <h2 className={styles.menu_item_heading}>
                    <div className={styles.menu_item_heading_name}>
                      <span className={styles.menu_item_name}>{lang === 'en' ? item.en_name : item.cz_name}</span>
                      <span className={styles.menu_item_name_sub}>{lang === 'en' ? item.cz_name : item.en_name}</span>
                      {/* <span className={styles.menu_item_name_sub}>{item.en_name}</span> */}
                    </div>
                    <div>
                      <span className={styles.menu_item_price}>

                        <span className={styles.menu_item_price_amount}>{item.price}</span>
                        <span className={styles.menu_item_price_currency}>CZK</span>
                      </span>
                      <h3 className={styles.order_nummber_under_price}>#{item.number}</h3>
                    </div>
                  </h2>
                  <p className={styles.menu_item_description}>{lang === 'en' ? item.en_description : item.cz_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>))}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_section}>
            <h3>Find <span>us</span></h3>
            <a href='https://maps.app.goo.gl/Lj9YspNJBbt3D8318?g_st=ic'> <span>Spálená 90/17, 110 00 Nové Město, Czechia</span>
              {/* <div className={styles.map}
                title="Map showing business location."></div> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.0243070229683!2d14.419349692681253!3d50.07944708762389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95aeb20f33f9%3A0x39e0e5ab0d4b3374!2sMr.%20Falafel!5e0!3m2!1sen!2seg!4v1680509042141!5m2!1sen!2seg"
                width="100%"
                height="250"
                style={{
                  marginTop: '1rem', border: 'none'
                }}
                allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </a>
            <div className={styles.social}>
              <a target='_blank' href='https://wolt.com/en/cze/prague/restaurant/grill-restaurant' className={styles.wolt_icon}>W</a>
              <a target='_blank' href='https://m.facebook.com/profile.php?id=100080996603475' className="fa fa-facebook"></a>
              <a target='_blank' href='https://www.instagram.com/mr.falafelprague/?hl=en' className="fa fa-instagram"></a  >
            </div>

          </div>
          <div className={styles.footer_top_section}>
            <div className={styles.footer_top_section}>
              <h3>Call <span>us</span></h3>
              <a href='tel:+420602342820'>+420 602 342 820</a>
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
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.copyright}>
            Copyright © 2023 Palstinian Restaurant - All rights reserved <br /> Designed By: <a target='_blank' href='http://digitalizers.co/'>Digitalizers</a>
          </div>
          <div className={styles.flag_background}>
            <div className={styles.flag_top}></div>
            <div className={styles.flag_middle}></div>
            <div className={styles.flag_triangle}></div>
          </div>
          {/* {lang == 'en' ? 'CZ' : 'EN'} */}

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