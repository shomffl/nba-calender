import React, { useState } from "react";
import ReactDOM from "react-dom";

function Example() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const calendar = createCalendear(year, month);

    const onClick = (n: any) => () => {
        const nextMonth = month + n;
        if (12 < nextMonth) {
            setMonth(1);
            setYear(year + 1);
        } else if (nextMonth < 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(nextMonth);
        }
    };

    return (
        <>
            <div className="calender-header">
                <h1>{`${year}年${month}月`}</h1>
                <div className="calender-nav">
                    <button onClick={onClick(-1)}>{"<先月"}</button>
                    <button onClick={onClick(1)}>{"翌月>"}</button>
                </div>
            </div>
            <table className="calender-table">
                <thead>
                    <tr>
                        <th>日</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((week, i) => (
                        <tr key={week.join("")}>
                            {week.map((day: any, j: any) => (
                                <td key={`${i}${j}`} id={day}>
                                    <div>
                                        <div>{day}</div>
                                        <div className="schedule-area"></div>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function createCalendear(year: any, month: any) {
    const first = new Date(year, month - 1, 1).getDay();
    console.log(first);

    return [0, 1, 2, 3, 4, 5].map((weekIndex) => {
        return [0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
            const day = dayIndex + 1 + weekIndex * 7;
            return day - first;
        });
    });
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
