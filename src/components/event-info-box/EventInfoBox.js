import './EventInfoBox.css';

const EventInfoBox = ({info}) => {
  return (
   <div className='event-info-box'>
       <h2>Event Location Info</h2>
       <ul>
           <li>ID: <strong>{info.id}</strong></li>
           <li>TITLE: <strong>{info.title}</strong></li>
       </ul>
   </div>
  );
 }

export default EventInfoBox;