import Project from './ui/project';

export default function Projects() {
  return (
    <div className="container pt-4" id="projects-list">
        <div class="card-group mb-2">
            <Project key={1} 
                project={'Quick$ave'} 
                text={'Created using a 3rd-Party API to provide the best deals in gaming to our customers.'} 
                img={'/quicksavesample.jpg'} 
                url={'http://cltjared.github.io'} 
            />

            <Project key={2} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'/torq.png'} 
                url={'http://cltjared.github.io'} 
            />

            <Project key={3} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'/path/to/image2.jpg'} 
                url={'http://cltjared.github.io'} 
            />
        </div>
        <div class="card-group">
            <Project key={4} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'/path/to/image2.jpg'} 
                url={'http://cltjared.github.io'} 
            />
            
            <Project key={5} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'/path/to/image2.jpg'} 
                url={'http://cltjared.github.io'} 
            />

            <Project key={6} 
                project={'Torq Rentals'} 
                text={'Site developed to create an API to show different car(s) at different location(s). User authentication and reservations.'} 
                img={'/path/to/image2.jpg'} 
                url={'http://cltjared.github.io'} 
            />
        </div>
    </div>
  );
}
