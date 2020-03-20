import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function Diagram(props) {
	return (
		<Svg height={300} width={300} {...props}>
			<Circle fill="#fff" strokeWidth={1} stroke="#e9869f" cx={150} cy={150} r={150} />
			<Circle fill="#fff" strokeWidth={2} stroke="#e9869f" cx={150} cy={150} r={125} />
			<Circle fill="#fff" strokeWidth={3} stroke="#e9869f" cx={150} cy={150} r={100} />
			<Circle fill="#fff" strokeWidth={4} stroke="#e9869f" cx={150} cy={150} r={75} />
			<Circle fill="#e9869f" strokeWidth={4} cx={150} cy={150} r={30} />
		</Svg>
	)
}

export default Diagram