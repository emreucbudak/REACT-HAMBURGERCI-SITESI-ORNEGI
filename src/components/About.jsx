import React from 'react'
import Banner from '../assets/banneryeni.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Banner})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius inventore ipsa. Vel perferendis assumenda delectus aspernatur maxime, modi suscipit asperiores voluptatem ex natus quasi quidem quos odit, ipsum nisi.
        Doloribus, eius natus dolorum dolor illo voluptas libero necessitatibus? Consectetur est beatae, quia illo labore necessitatibus, hic dolorem, odio libero aspernatur voluptate harum similique tempora dolorum ea nihil blanditiis excepturi.
        Dicta debitis totam iste expedita modi velit porro voluptas accusamus natus? Quo dolore error aspernatur. Commodi aspernatur maiores est, vel consequuntur reiciendis itaque quaerat unde in voluptatibus quisquam minus distinctio.
        Molestias reiciendis, explicabo, ducimus facilis, commodi veniam cumque at aperiam ipsum voluptate laudantium eos nemo id architecto recusandae nihil fugiat. Temporibus nesciunt molestias sequi voluptate, repellat cumque sit expedita possimus?
        Deserunt porro, asperiores quis nobis magni tempore sit veritatis sapiente repellat, repellendus voluptates natus odit eveniet esse, quia in repudiandae velit assumenda. Nisi voluptatibus doloribus quod at vel atque blanditiis?
        At ipsa magni id sunt architecto recusandae voluptates quibusdam harum enim rerum! Rerum delectus esse a ea unde reiciendis veniam neque assumenda odit impedit, dignissimos temporibus cumque ipsa! Vel, aliquid?</p>

      </div>
    </div>
  )
}

export default About