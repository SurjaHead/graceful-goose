
import { Line } from "react-chartjs-2";
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { c } from "vite/dist/node/types.d-aGj9QkWt";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

export const LineGraph = ({ data }) => {
    const options = {}
    return (
        <Line options={options} data={getFrequencyData()} />
    )
}

const getFrequencyData = (data) => {
    let [initialLables, setInitialLables] = useState([1, 2, 3, 4, 5, 6, 7])
    let frequencyData
    setTimeout(() => {
    for (let i=0; i < audioLength, i++;) {
        setInitialLables( () => {
            initialLables.shift()
            initialLables.push(initialLables[initialLables.length - 1] + 1)
        })
        frequencyData = {
            lables: [
                initialLables
            ],
            datasets: [
                {
                    label: 'Frequency',
                    data: [
                        1, 2, 3, 4, 5, 6, 7
                    ],
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                },
            ],
        }
    }
}, 1000)
    return frequencyData}