import { createAppContainer, createStackNavigator } from 'react-navigation';
import ScheduleAppointment from './pages/ScheduleAppointment';
import OkScheduleAppointment from './pages/OkScheduleAppointment';

export default createAppContainer(
    createStackNavigator({
        ScheduleAppointment,
        OkScheduleAppointment,
    },{
        
        mode: 'modal'
    })
);