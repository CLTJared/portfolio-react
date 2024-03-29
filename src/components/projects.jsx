import Project from './ui/project';

export default function Projects() {
  return (
    <div className="container pt-4" id="projects-list">
        <div className="card-group mb-2">
            <Project key={1} 
                project={'Quick$ave'} 
                text={'Created using a 3rd-Party API to provide the best deals in gaming to our customers.'} 
                img={'/quicksavesample.jpg'} 
                url={'https://cltjared.github.io/api-quicksave/home.html'}
                repo={'https://github.com/CLTJared/api-quicksave'}
            />

            <Project key={2} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'/torq.png'} 
                url={'http://cltjared.github.io'}
                repo={'https://github.com/CLTJared/torq-rental'}
            />

            <Project key={3} 
                project={'Group Project 3'} 
                text={'Site developed using MERN stack. Currently WIP.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />
        </div>
        <div class="card-group mb-5">
            <Project key={4} 
                project={'API Routing'} 
                text={'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.'} 
                img={'insomnia-get-users.jpg'} 
                url={'https://app.screencastify.com/v3/watch/3j5k7sGPTcb8Bo5kotF0'} 
                repo={'https://github.com/CLTJared/Social-Network-API'}
            />
            
            <Project key={5} 
                project={'WIP'} 
                text={'Project under development.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />

            <Project key={6} 
                project={'WIP'} 
                text={'Project under development.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />
        </div>
    </div>
  );
}
