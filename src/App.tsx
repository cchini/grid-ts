import *  as React from "react";
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { data, subjects } from './data';
import dayjs from 'dayjs';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const currentDate = new Date(2017, 4, 23);

class App extends React.Component {

  onCancelClick = (args: any) => args.cancel = true; 
  
  render() {
    return (
      <React.Fragment>
        <Scheduler
          dataSource={data}
          views={[{
            type: "week",
            name: "Unlimited Mode",
            maxAppointmentsPerCell: "unlimited",
            intervalCount: 1,
          }]}
          defaultCurrentView="week"
          defaultCurrentDate={currentDate}
          startDayHour={8}
          endDayHour={22}
          firstDayOfWeek={1}
          showAllDayPanel={false}
          onCellClick={this.onCancelClick}
          onAppointmentDblClick={this.onCancelClick}
          onAppointmentClick={this.onCancelClick}
          focusStateEnabled={false}
          dateCellTemplate={(ItemView: any, index:any, container: any) =>
            container.append(dayjs(ItemView.date).format('dddd'))}
        >
          <Resource
            dataSource={subjects}
            allowMultiple={true}
            fieldExpr="subjectsId"
            label="Subject"
            useColorAsDefault='Subject'
          />
        </Scheduler>
      </React.Fragment>
    );
  }
}

export default App;
