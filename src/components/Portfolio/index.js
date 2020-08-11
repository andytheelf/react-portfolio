import React from 'react';

function Portfolio() {

    const projects = [
        {
            name: 'Quiz Time!',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/quiz.png?raw=true',
            github: 'https://github.com/andytheelf/It-s-Quiz-Time-',
            deployed: 'https://github.com/andytheelf/andytheelf-quiz.github.io'
        },
        {
            name: 'The Informed Artist',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/print.jpg?raw=true',
            github: 'https://github.com/roxyvaught/The-Informed-Artist',
            deployed: 'https://the-informed-artist.herokuapp.com/'
        },
        {
            name: 'Have You Read It!',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/read.PNG?raw=true',
            github: 'https://github.com/andytheelf/Have-you-read-it-',
            deployed: 'https://ut-project-1-group-5.github.io/project-1-group-5/'
        },
        {
            name: 'Note Taker',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/sampleNotes.png?raw=true',
            github: 'https://github.com/andytheelf/NoteTaker',
            deployed: 'https://powerful-tundra-40865.herokuapp.com/'
        },
        {
            name: 'Password',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/password.png?raw=true',
            github: 'https://github.com/andytheelf/Password-Generator',
            deployed: 'https://github.com/andytheelf/andytheelf.password.github.io'
        },
        {
            name: 'Run Buddy',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/RunBuddy2.jpg?raw=true',
            github: 'https://github.com/andytheelf/Projects',
            deployed: 'https://github.com/andytheelf/andytheelf.portfolio.github.io'
        },
        {
            name: 'Tech Blog',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/blog.PNG?raw=true',
            github: 'https://github.com/andytheelf/tech-blog3',
            deployed: 'https://morning-taiga-89139.herokuapp.com/'
        },
        {
            name: 'Weather Finder',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/weather.png?raw=true',
            github: 'https://github.com/andytheelf/weatherfinder',
            deployed: 'https://github.com/andytheelf/andytheelf.directory.github.io'
        },
        {
            name: 'Weekday Scheduler',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/schedule.png?raw=true',
            github: 'https://github.com/andytheelf/Weekday-Schedule',
            deployed: 'https://github.com/andytheelf/andytheelf-scheduler.github.io'
        },
        {
            name: 'Budget Tracker',
            img: 'https://github.com/andytheelf/react-portfolio/blob/master/src/img/bud2.PNG?raw=true',
            github: 'https://github.com/andytheelf/budget-2',
            deployed: 'https://fathomless-coast-68447.herokuapp.com/'
        },

    ]

    return (

        <div>
            <div className="container" style={{ marginTop: '10px' }}>
            <img style={{ marginTop: '3vh' }} src="https://img.icons8.com/dusk/64/000000/home-office.png" alt='portfolio'/>
            <h1>Portfolio</h1>
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[0].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[0].name }</h3>
                                <a href={ projects[0].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[0].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/checklist.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[1].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[1].name }</h3>
                                <a href={ projects[1].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[1].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/plasticine/100/000000/multiple-choice.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[2].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[2].name }</h3>
                                <a href={ projects[2].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[2].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/100/000000/art-document---v2.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '10px'}}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[3].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[3].name }</h3>
                                <a href={ projects[3].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[3].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/100/000000/book-reading.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[4].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[4].name }</h3>
                                <a href={ projects[4].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[4].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/100/000000/notes-app.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[5].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[5].name }</h3>
                                <a href={ projects[5].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[5].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/100/000000/password-window.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '10px'}}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[6].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[6].name }</h3>
                                <a href={ projects[6].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[6].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/100/000000/gymnastics.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[7].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[7].name }</h3>
                                <a href={ projects[7].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[7].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/50/000000/naver-blog.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[8].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[8].name }</h3>
                                <a href={ projects[8].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[8].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/new-moon--v2.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '10px'}}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                            <img className="card-img-top" src={projects[9].img} alt="Card cap" />
                            <div className="card-body">
                                <h3 className="card-title portfolio">{ projects[9].name }</h3>
                                <a href={ projects[9].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
                                <a href={ projects[9].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/cheap.png" alt="Deployed" className="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Portfolio