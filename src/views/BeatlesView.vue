<script setup>
  /* import TheWelcome from '../components/TheWelcome.vue' */
</script>
<template>
  <div class="beatles">
    <h1>The Beatles</h1>
  </div>

  <div id="wrapper"></div>

  <div id="header">
    <img src="@/assets/images/Beatles.png" />
  </div>
  <ul id="nav">
    <li><a @click="$router.push('/')">Home</a></li>
    <li><a @click="$router.push('/contact')">Contact</a></li>
    <li><a @click="$router.push('/pink-floyd')">Pink Floyd</a></li>
    <li><a @click="$router.push('/prince')">Prince</a></li>
    <li><a @click="$router.push('/radiohead')">Radiohead</a></li>
    <li><a @click="$router.push('/sting')">Sting</a></li>
  </ul>
  <div>
    <h1>MY TOP FIVE</h1>
    <h2>The Beatles</h2>
    <img src="@/assets/images/beatleswp.jpg" />
  </div>

  <div id="content">
    <p>
      In the annals of music history, few bands have left as indelible a mark as
      The Beatles. From their humble beginnings in Liverpool to their meteoric
      rise to global stardom, John Lennon, Paul McCartney, George Harrison, and
      Ringo Starr revolutionized popular music and forever altered the course of
      musical history as well as many cultural norms in ways that continue to
      resonate today.
    </p>
    <p>
      At the core of The Beatles' significance lies their unparalleled musical
      innovation. From their early days playing in the clubs of Liverpool to
      their groundbreaking studio experiments, the band continually pushed the
      boundaries of what was possible in popular music.The Beatles effortlessly
      traversed genres, incorporating elements of rock and roll, pop, folk,
      psychedelia, and beyond into their music. This versatility allowed them to
      appeal to a diverse audience and expand the sonic possibilities of popular
      music.The collaborative genius of John Lennon and Paul McCartney produced
      some of the most enduring and influential songs in the history of popular
      music. Their ability to craft melodies that were both catchy and
      emotionally resonant set a new standard for songwriting.
    </p>
    <p>
      The Beatles' partnership with producer George Martin and the skilled
      engineers at Abbey Road Studios became a crucible for experimentation.
      Techniques such as multitrack recording, tape loops, and backward masking
      were employed to create innovative sounds that captivated listeners.Albums
      like "Sgt. Pepper's Lonely Hearts Club Band" and "Abbey Road" showcased
      The Beatles' ability to craft cohesive musical journeys that transcended
      the confines of the traditional pop song format. These concept albums
      demonstrated a level of artistic ambition and storytelling prowess
      previously unseen in popular music.Drawing inspiration from a wide range
      of musical styles and genres, including rock and roll, folk, R&B, and
      psychedelia, The Beatles created a rich and diverse body of work that
      defied categorization. Their willingness to experiment with new sounds and
      techniques helped redefine the boundaries of pop music and paved the way
      for future generations of artists to explore new sonic territories.
    </p>
    <p>
      Beyond their musical achievements, The Beatles wielded immense cultural
      influence that reverberated far beyond the realm of music. Through their
      music, fashion, and worldview, they became symbols of a generational shift
      and helped shape the cultural landscape of the 1960s.
    </p>
    <p>
      The Beatles' unprecedented popularity sparked a cultural phenomenon known
      as "Beatlemania," characterized by mass hysteria and adoration from fans
      around the world. Their concerts were attended by throngs of screaming
      fans, and their every move was scrutinized by the media.The Beatles'
      historic appearance on The Ed Sullivan Show in February 1964 marked the
      beginning of the "British Invasion" and catapulted the band to
      superstardom in the United States. Their electrifying performances
      captivated millions of viewers and sparked a frenzy of Beatlemania across
      the nation.From the streets of London to the shores of America and beyond,
      Beatlemania swept the globe, transforming The Beatles into international
      icons and setting the stage for their unprecedented cultural impact.
    </p>
    <p>
      The Beatles' distinctive style, from their signature mop-top haircuts to
      their mod-inspired suits, influenced fashion trends and youth culture on a
      global scale. Their sartorial choices reflected the changing attitudes of
      the era and helped define the look of the 1960s.
    </p>
    <p>
      The Beatles were keen observers of the social and political upheaval of
      the 1960s, and their music often served as a mirror to the turbulent times
      in which they lived. Songs like "Revolution," "Blackbird," and "Imagine"
      addressed issues ranging from civil rights to peace activism, resonating
      with audiences who sought meaning and solace amidst the chaos.With their
      rebellious spirit and irreverent sense of humor, The Beatles embodied the
      spirit of youthful rebellion that defined the countercultural movement of
      the 1960s. Their music and message resonated with a generation of young
      people who were eager to challenge the status quo and forge a new path
      forward.The Beatles were agents of social change who used their platform
      to advocate for peace, love, and social justice. Songs like "All You Need
      Is Love," "Imagine," and "Revolution" became anthems for a generation of
      activists and idealists who sought to build a better world.
    </p>
    <p>
      Nearly six decades after their formation, The Beatles' legacy endures,
      continuing to inspire new generations of musicians and fans alike. Their
      influence can be felt in virtually every corner of popular culture, from
      music and film to fashion and art. Countless artists cite The Beatles as a
      primary influence, and their songs continue to be covered, sampled, and
      reinterpreted by musicians of all genres. Their pioneering spirit and
      willingness to experiment serve as a blueprint for innovation in popular
      music.
    </p>
    <p>
      The Beatles' imagery and symbolism have permeated popular culture,
      becoming iconic touchstones that transcend generational boundaries.Despite
      the passage of time, The Beatles' music remains as relevant and beloved as
      ever, transcending generational divides to speak to audiences of all ages.
      Whether it's the timeless melodies of "Yesterday" or the psychedelic
      soundscapes of "Lucy in the Sky with Diamonds," their music continues to
      captivate listeners and evoke powerful emotions.The Beatles' influence can
      be heard in virtually every corner of the musical landscape, from pop and
      rock to hip-hop, electronic, and beyond. Their timeless melodies,
      inventive arrangements, and adventurous spirit continue to inspire new
      generations of artists to push the boundaries of creativity and
      innovation.
    </p>
    <p>
      In the pantheon of popular music, few bands can rival the enduring
      influence and cultural significance of The Beatles. Through their musical
      innovation, cultural impact, and timeless appeal, John Lennon, Paul
      McCartney, George Harrison, and Ringo Starr left an indelible mark on the
      fabric of popular culture that continues to resonate to this day. As we
      reflect on their legacy, it becomes clear why The Beatles remain one of
      the most important bands in history, their influence stretching far beyond
      the confines of the recording studio to shape the very essence of our
      shared cultural heritage.Perhaps The Beatles' greatest legacy is the
      message of love and unity that permeates their music and ethos. Through
      their songs and actions, they showed us the power of music to transcend
      barriers and bring people together, leaving behind a legacy of hope and
      optimism that continues to resonate in an often troubled world.
    </p>
  </div>
</template>
<script>
  export default {
    name: 'Beatles-Page',
  };
</script>
<style scoped>
  body {
    background: #333 url('images/back.gif') repeat;
    text-align: center;
    font: normal 11px/18px verdana, arial, tahoma, sans-serif;
    color: #333;
    padding-top: 40px;
  }
  a {
    color: #666;
    text-decoration: none;
  }
  a:visited {
    text-decoration: underline;
  }
  a:hover {
    color: #ccc;
  }
  #header {
    width: 580px;
    height: 210px;
    background: #ccc no-repeat;
    background-position: top right;
  }
  #wrapper {
    width: 580px;
    background: #fff url('images/sidebar.gif') repeat-y;
    background-position: 0 0;
    border: solid 10px #fff;
    margin: 0 auto;
    text-align: left;
  }
  h1 {
    width: 140px;
    height: 30px;
    background-color: #333;
    margin: 1px 1px 1px 0;
    float: left;
    font: bold 16px/30px arial, verdana, tahoma, sans-serif;
    padding-left: 10px;
    color: #fff;
    cursor: default;
  }
  h1:first-letter {
    color: #fff;
    text-decoration: none;
  }
  h2 {
    width: 419px;
    height: 30px;
    background-color: #333;
    float: left;
    font: bold 16px/30px arial, verdana, tahoma, sans-serif;
    padding-left: 10px;
    color: #fff;
    margin-top: 1px;
    cursor: default;
  }
  #nav {
    list-style: none;
    z-index: 2;
    border-right: 1px solid #fff;
    height: 210px;
    width: 150px;
  }
  #nav li a {
    color: #fff;
    font: normal 11px/24px verdana, arial, tahoma, sans-serif;
    display: block;
    width: 140px;
    height: 24px;
    background-color: #000;
    border-bottom: 1px solid #fff;
    padding-left: 10px;
    text-decoration: none;
  }
  #nav li a:hover {
    background-color: #333;
  }
  #current a {
    background-image: url('images/bullet.gif');
    background-repeat: no-repeat;
    background-position: 100% 50%;
  }
  #sidebar {
    width: 132px;
    background-color: #ccc;
    float: left;
    position: relative;
    left: -4px;
    margin-left: -147px;
    border-top: 1px solid #fff;
    font: normal 10px/18px verdana, arial, tahoma, sans-serif;
    padding: 8px;
  }
  img {
    border: none;
  }
  a img {
    display: block;
    max-width: 100%;
    margin-bottom: 20px;
    border: 1px solid #fff;
  }
  a:hover img {
    border-color: #f00;
  }
  #content {
    float: left;
    width: 400px;
    margin: 10px 0 0 10px;
  }
  p {
    margin-bottom: 20px;
  }
  p:first-line {
    font-weight: bold;
  }
</style>
