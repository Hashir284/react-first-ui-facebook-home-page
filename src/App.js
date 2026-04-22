import './header.css';
import './main.css';
import { Story } from './components/story'
import { Asidetitle, Asidecontact, Mainpost } from './components/aside'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-item1 logo'>
          <i className="fb-logo fa-brands fa-facebook"></i>
          <div className='input'>
            <i className="fa-brands fa-sistrix"></i>
            <input placeholder='Search facebook' />
          </div>
        </div>
        <div className='header-item2'>
          <i className="active fa-solid fa-house"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-video"></i>
          <img alt="" src='/2.jpeg' />
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-users"></i>
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className='header-item3'>
          <i className="fa-solid fa-gear"></i>
        </div>
      </header>
      <div className='all-content'>

        <aside className='aside1'>
          <div className='page-title'>
            <h1>Home</h1>
            <a href='https://github.com'>Create</a>
          </div>
          <div className='aside-pages-con'>

            <Asidetitle c='aside-pages ' t='Also this section by using Props' i='fa-solid fa-comment' />
            <Asidetitle c='aside-pages l-1' t='Saved' i='fa-solid fa-bookmark' />
            <Asidetitle c='aside-pages events' t='Events' i='fa-regular fa-calendar-check' />
            <Asidetitle c='aside-pages memories' t='Memories' i='fa-solid fa-floppy-disk' />
            <Asidetitle c='aside-pages fundraisers' t='Fundraisers' i='fa-brands fa-kickstarter' />
            <Asidetitle c='aside-pages memories' t='Settings and Privacy' i='fa-solid fa-gears' />
            <Asidetitle c='aside-pages gaming' t='Gaming' i='fa-solid fa-dice-d6' />
            <Asidetitle c='aside-pages help' t='Help and Center' i='fa-solid fa-circle-question' />
            <Asidetitle c='aside-pages seemore' t='See More' i='fa-solid fa-sliders' />
          </div>

          <div className='aside1-msg'>
            Privacy · Terms · Advertising · Ad Choices · Cookies · More · Facebook © 2019
          </div>
        </aside>

        <main>
          <section className='story-sec'>

            <div className='story-title'>
              <h2>Stories</h2>
              <a href='https://github.com'>See all</a>
            </div>

            <div className='story'>
              <figure>
                <div className="bg-img-story"><img alt="" src='/h.jpeg' height='100px' width='100px' /></div>
                <figcaption className="title">
                  My story
                </figcaption>
                <div className='pos-img-div my '><i className=" fa-solid fa-plus"></i></div>
              </figure>

              <Story
                src="https://randomuser.me/api/portraits/men/32.jpg"
                title="John Carter"
                src2="https://randomuser.me/api/portraits/men/32.jpg"
                cl='outline'
              />

              <Story
                src="https://randomuser.me/api/portraits/men/45.jpg"
                title="David Miller"
                src2="https://randomuser.me/api/portraits/men/45.jpg"
              // cl='outline'
              />

              <Story
                src="https://randomuser.me/api/portraits/men/52.jpg"
                title="James Ander"
                src2="https://randomuser.me/api/portraits/men/52.jpg"
              // cl='outline'
              />

              <Story
                src="https://randomuser.me/api/portraits/men/60.jpg"
                title="Robert Brown"
                src2="https://randomuser.me/api/portraits/men/60.jpg"
                cl='outline'
              />
            </div>

          </section>

          <section className='post'>
            <img alt="" src='/h.jpeg' />
            <div>Add a post</div>
            <i className="fa-solid fa-image"></i>
          </section>

          <section id='main-poster'>

            <Mainpost
              time='1 day ago'
              title='Learning JavaScript ES6 features'
              src='https://randomuser.me/api/portraits/men/45.jpg'
              id='David Miller'
              psrc='https://images.unsplash.com/photo-1581276879432-15e50529f34b'
            />

            <Mainpost
              time='2 hours ago'
              title='Building responsive UI with CSS Grid'
              src='https://randomuser.me/api/portraits/men/52.jpg'
              id='James Wilson'
              psrc='https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19'
            />

            <Mainpost
              time='Just now'
              title='Node.js backend setup completed 🚀'
              src='https://randomuser.me/api/portraits/men/60.jpg'
              id='Michael Scott'
              psrc='https://images.unsplash.com/photo-1555066931-4365d14bab8c'
            />

            <Mainpost
              time='3 hours ago'
              title='MongoDB database connected successfully'
              src='https://randomuser.me/api/portraits/men/75.jpg'
              id='Robert Brown'
              psrc='https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
            />

            <Mainpost
              time='6 hours ago'
              title='Tailwind CSS makes styling easier'
              src='https://randomuser.me/api/portraits/men/11.jpg'
              id='William Davis'
              psrc='https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19'
            />

            <Mainpost
              time='10 mins'
              title='Building REST APIs with Express.js'
              src='https://randomuser.me/api/portraits/men/80.jpg'
              id='Daniel Wilson'
              psrc='https://images.unsplash.com/photo-1555949963-aa79dcee981c'
            />

            <Mainpost
              time='2 days ago'
              title='Git & GitHub version control mastered'
              src='https://randomuser.me/api/portraits/men/90.jpg'
              id='Henry Adams'
              psrc='https://images.unsplash.com/photo-1511376777868-611b54f68947'
            />

            <Mainpost
              time='Yesterday'
              title='Frontend vs Backend explained'
              src='https://randomuser.me/api/portraits/women/65.jpg'
              id='Emma Watson'
              psrc='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
            />

            <Mainpost
              time='4 hours ago'
              title='Debugging React apps like a pro'
              src='https://randomuser.me/api/portraits/women/45.jpg'
              id='Olivia Smith'
              psrc='https://images.unsplash.com/photo-1504639725590-34d0984388bd'
            />

            <Mainpost
              time='30 mins'
              title='Learning TypeScript basics'
              src='https://randomuser.me/api/portraits/women/32.jpg'
              id='Sophia Johnson'
              psrc='https://images.unsplash.com/photo-1517430816045-df4b7de11d1d'
            />

            <Mainpost
              time='5 hours ago'
              title='Building full stack MERN app'
              src='https://randomuser.me/api/portraits/men/22.jpg'
              id='Liam Anderson'
              psrc='https://images.unsplash.com/photo-1551288049-bebda4e38f71'
            />

            <Mainpost
              time='1 week ago'
              title='UI/UX design matters in web apps'
              src='https://randomuser.me/api/portraits/men/18.jpg'
              id='Ethan Clark'
              psrc='https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
            />

            <Mainpost
              time='8 mins'
              title='Deploying project on Vercel 🌐'
              src='https://randomuser.me/api/portraits/men/41.jpg'
              id='Noah Thompson'
              psrc='https://images.unsplash.com/photo-1547658719-da2b51169166'
            />

            <Mainpost
              time='3 days ago'
              title='API integration made simple'
              src='https://randomuser.me/api/portraits/men/55.jpg'
              id='Lucas Martin'
              psrc='https://images.unsplash.com/photo-1555066931-4365d14bab8c'
            />
          </section>
        </main>

        <aside className='aside2'>
          <div className='page-title'>
            <h1>Contacts</h1>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className='aside-pages-con'>

            <Asidecontact
              c='aside-pages'
              src="h.jpeg"
              t='Hashir (You)'
              i='outline img-c'
            />
            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/75.jpg"
              t='Jekole'
              i='outline img-c'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/11.jpg"
              t='Michael Scott'
              i='img-c'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/32.jpg"
              t='John Carter'
              i='img-c outline'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/45.jpg"
              t='David Miller'
              i='img-c'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/52.jpg"
              t='James Anderson'
              i='img-c'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/60.jpg"
              t='Robert Brown'
              i='img-c'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/70.jpg"
              t='William Davis'
              i='outline img-c'
            />

            <Asidecontact
              c='aside-pages'
              src="https://randomuser.me/api/portraits/men/80.jpg"
              t='Daniel Wilson'
              i='outline img-c'
            />

          </div>
        </aside>

      </div>
    </div>
  );
}

export default App;
