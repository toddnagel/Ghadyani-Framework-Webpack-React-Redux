import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Enums
import {
	TAP_MESSAGE_TYPE,
	TAP_COLOR,
} from 'ducks/tap'

class TestsStats extends PureComponent {
	render() {
		const {
			numTotal,
			numPassed,
			numFailed,
			duration,
			testsComplete,
		} = this.props
		const fontSize = '2em'

		return (
			<div>
				<h1 style={{ marginTop: 0 }}>
					{testsComplete ? 'Stats' : 'Running tests...'}
				</h1>

				<p style={{ margin: '0 0.4em' }}>
					<span style={{
						fontSize,
						color: TAP_COLOR.INFO,
					}}>{numTotal} </span>Total

					<span style={{ fontSize }}> | </span>
					<span style={{
						fontSize,
						color: TAP_COLOR.PASS,
					}}>{numPassed} </span>{testsComplete ? 'Passed' : 'Passing'}

					<span style={{ fontSize }}> | </span>
					<span style={{
						fontSize,
						color: TAP_COLOR.FAIL,
					}}>{numFailed} </span>{testsComplete ? 'Failed' : 'Failing'}

					{duration && <span style={{ fontSize }}> | </span>}
					{duration && <span>
						<span style={{
							fontSize,
							color: TAP_COLOR.INFO,
						}}>{duration.toFixed(1)}s </span>Duration
					</span>}
				</p>
			</div>
		)
	}
}

export default connect(({ tap }) => ({
	duration: tap.duration,
	numFailed: tap.numFailed,
	numPassed: tap.numPassed,
	numTotal: tap.numTotal,
	testsComplete: tap.testsComplete,
}))(TestsStats)
