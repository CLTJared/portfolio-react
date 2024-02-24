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
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />
        </div>
        <div class="card-group">
            <Project key={4} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />
            
            <Project key={5} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />

            <Project key={6} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'https://placehold.co/350x150'} 
                url={'http://cltjared.github.io'} 
                repo={'https://github.com/CLTJared/'}
            />
        </div>
    </div>
  );
}
