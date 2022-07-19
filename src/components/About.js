function About () {

    return(
        <div id="about">
            <h1>About</h1>
            <p>Built using react, the Hunter's Handbook is a site based around information from the game Monster Hunter World. All the information used is being pulled from an <a href="https://mhw-db.com" target="_blank">API built by Tyler Lartonoix.</a> <br/> 
            The idea for the web page came from wanting to build a more detailed version of the hunter's notes from the game, which has information regarding monsters and their weaknesses.<br/>
            The Hunter's Handbook has that information as well as damage types monsters deal, ailments they inflict, and items the player can bring to recover from the ailments. Every monster within the API I used has its own page with all this information. <br/>
            It doesn't stop at just monsters like the game's notes however. The Hunter's Handbook also has sections that allows users to see all the weapons and armor in the game. <br/>
            With armor, users can see what skills each armor set has and which pieces the skills come from. With Weapons, the player can find a list of weapons by each of the 14 types and see weapons by element.</p> 
            <footer id="about-footer">
                <h3>Built by Ash Barker using React, React Router, and Axios</h3>
            </footer>
        </div>
    )
}

export default About