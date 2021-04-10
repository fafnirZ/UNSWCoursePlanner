
import React, { Component, Fragment } from 'react';
import { addFacebookScript } from '../../scripts/logins.js'

export default class FacebookAuthorise extends Component {

	async componentDidMount() {
		try {

			await addFacebookScript();
			const params = {
				appId: '5330495613659449',
				cookie: false,
				xfbml: false,
				version: 'v3.2'

			};

			FB.init(params);
			FB.getLoginStatus(resp => {
				console.log('FB:status:' , resp.status);
			});

		}
		catch (err) {
			console.log(err.name, ':', err.message);
		}

	}

	handleClick = () => {
		const { loading, onSuccess } = this.props;
		if (loading) {
			return;
		}

		FB.getLoginStatus((resp) => {
			console.log('FB:status:', resp.status);
			const params = {
				provider: 'facebook'
			};

			if (resp.status === 'connected') {
				params.fbAccessToken = resp.authResponse.accessToken;
				FB.api('/me', (response) => {
					console.log(response)
					console.log(`good to see you ${response.name}.`);

				});

				params.fbAccessToken = resp.authResponse.accessToken;
				onSuccess(this.state, this.props.currentUser);
			}
		}, { scope : 'email' });
	}

	render() {
		return (
			<Fragment>
				<button
					type="button"
					className="btn facebook"
					onClick={this.handleClick}
				>
					Facebook
				</button>
			</Fragment>
		)
	}

}