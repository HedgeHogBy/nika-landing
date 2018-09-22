import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMobile, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

class Contacts extends React.Component {
	render() {
		return (
			<section id="three">
				<h2>Связаться</h2>
				<p>
					Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
					faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
				</p>
				<div className="row">
					<div className="8u 12u$(small)">
						<form method="post" action="#">
							<div className="row uniform 50%">
								<div className="6u 12u$(xsmall)">
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Имя"
									/>
								</div>
								<div className="6u 12u$(xsmall)">
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
									/>
								</div>
								<div className="12u">
									<textarea
										name="message"
										id="message"
										placeholder="Сообщение"
										rows="4"
									/>
								</div>
							</div>
						</form>
						<ul className="actions">
							<li><input type="submit" value="Отправить сообщение"/></li>
						</ul>
					</div>
					<div className="4u 12u$(small)">
						<ul className="labeled-icons">
							<li>
								<div className="icon">
									<FontAwesomeIcon icon={faHome} />
								</div>
								Минск
							</li>
							<li>
								<div className="icon">
									<FontAwesomeIcon icon={faMobile} />
								</div>
								<a href="tel:+375259007017">+375 25 9007017</a>
							</li>
							<li>
								<div className="icon">
									<FontAwesomeIcon icon={faEnvelopeOpen} />
								</div>
								<a href="#">hello@untitled.tld</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default Contacts
