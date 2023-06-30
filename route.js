import React from 'react'; 

const RouteList = (props) => {

    var route_list = props.routes.map((route) => {
        return <tr className="potigai">
                    <td className="potigai">{route.vehicle_id}</td>
                    <td className="potigai">{route.route_name}</td>
                    <td className="potigai">{route.arrival_time}</td>
                    <td className="potigai">{route.departure_time}</td>
                    <td className="potigai">{route.status}</td>
                </tr>
    })

    return  <div>
                <table className="ui sortable celled table">
                    <thead className="main">
                        <tr className="head-main">
                            <th className="potigai">Train ID</th>
                            <th className="potigai">Route</th>
                            <th className="sorted descending">Arrival Time</th>
                            <th className="potigai">Departure Time</th>
                            <th className="">Status</th>
                            <th className="">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {route_list}
                    </tbody>
                </table>
            </div>

};

export default RouteList;
