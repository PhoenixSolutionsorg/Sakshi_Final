import { Field, Form, Formik } from "formik";
import "./signup.css";
export default function Signup({ signIn, signUp }) {
	return <>
		<div className='bg'>
			<div className="row mt-3 mb-3">
				<div className="col-md-6 mx-auto p-0">
					<div className="card1">
						<div className="login-box">
							<div className="login-snip">
								<input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Login</label>
								<input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
								<div className="login-space">
									<Formik
										initialValues={{ email: '', password: '' }}
										enableReinitialize
										onSubmit={signIn}
									>
										{({ handleSubmit }) => (
											<Form onSubmit={handleSubmit}>
												<div className="login">
													<div className="group">
														<label htmlFor="user" className="label">Username</label>
														<Field
															id="user1"
															name="email"
															type="text"
															className="input"
															placeholder="Enter your username"
														/>
													</div>
													<div className="group">
														<label htmlFor="pass" className="label">Password</label>
														<Field
															id="pass3"
															type="password"
															name="password"
															className="input"
															data-type="password"
															placeholder="Enter your password"
														/>
													</div>
													{/* ...other fields */}
													<div className="group">
														<input id="check" type="checkbox" className="check" checked />
														<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
													</div>
													<div className="group">
														<input type="submit" className="button" value="Sign In" />
													</div>
													<div className="hr"></div>
													<div className="foot">
														<a href="#">Forgot Password?</a>
													</div>
												</div>
											</Form>
										)}
									</Formik>

									<Formik
										initialValues={{ userName: '', password: '', repeatPassword: '', email: '' }}
										enableReinitialize
										onSubmit={signUp}
									>
										<Form>
											<div className="sign-up-form">
												<div className="group">
													<label htmlFor="user" className="label">Username</label>
													<Field id="user" type="text" name="userName" className="input" placeholder="Create your Username" />
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">Password</label>
													<Field id="pass" type="password" name="password" className="input" data-type="password" placeholder="Create your password" />
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">Repeat Password</label>
													<Field id="pass1" type="password" name="repeatPassword" className="input" data-type="password" placeholder="Repeat your password" />
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">Email Address</label>
													<Field id="pass2" type="text" name="email" className="input" placeholder="Enter your email address" />
												</div>
												<div className="group">
													<Field type="submit" className="button" value="Sign Up" />
												</div>
												<div className="hr"></div>
												<div className="foot">
													<label htmlFor="tab-1">Already Member?</label>
												</div>
											</div>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>

}