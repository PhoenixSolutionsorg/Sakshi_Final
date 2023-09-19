import { Field, Form, Formik } from "formik";
import "./signup.css";
import FileUpload from "../file-upload";
import { useState } from "react";
export default function Signup({ signIn, signUp }) {
	const [imageUrl, setImageUrl] = useState();

	return <>
		<div className='bg'>
			<div className="row mt-3 mb-3">
				<div className="col-md-9 mx-auto p-0">
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
															className="input p-3"
															placeholder="Enter your username"
														/>
													</div>
													<div className="group">
														<label htmlFor="pass" className="label">Password</label>
														<Field
															id="pass3"
															type="password"
															name="password"
															className="input p-3"
															data-type="password"
															placeholder="Enter your password"
														/>
													</div>
													{/* ...other fields */}
													<div className="group">
														<input id="check" type="checkbox" className="check" checked />
														<label htmlFor="check"> Keep me Signed in</label>
													</div>
													<div className="group">
														<input type="submit" className="button p-3" value="Sign In" />
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
										initialValues={{ first_name: '', last_name: '', password: '', confirmPassword: '', email: '', date_of_birth: '', date_of_anniversry: '' }}
										enableReinitialize
										onSubmit={signUp}
									>
										<Form>
											<div className="sign-up-form">
												<div className="group">
													<label htmlFor="user" className="label">First Name</label>
													<Field id="user" type="text" name="first_name" className="input" placeholder="Enter your First Name" />
												</div>
												<div className="group">
													<label htmlFor="user" className="label">Last Name</label>
													<Field id="user" type="text" name="last_name" className="input" placeholder="Enter your Last Name" />
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">Password</label>
													<Field id="pass" type="password" name="password" className="input" data-type="password" placeholder="Enter your password" />
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">Confirm Password</label>
													<Field id="pass1" type="password" name="confirmPassword" className="input" data-type="password" placeholder="Confirm your password" />
												</div>
												<div className="group ">
													<label htmlFor="pass" className="label">Email Address</label>
													<Field id="pass2" type="text" name="email" className="input" placeholder="Enter your email address" />
												</div>
												{/* ------------------------------------------------ */}
												<div className="w-100 block1">
													<div className="group col-md-6 float-left">
														<label htmlFor="pass" className="label">Profile Picture</label>
														<FileUpload
															mediaFor={'product'}
															mediaType={'images'}
															imageUrl={imageUrl}
															setImageUrl={setImageUrl}
														/>
													</div>
													<div className="group col-md-6 float-left ">
														<label htmlFor="pass" className="label">Date Of Anniversary</label>
														<Field id="pass2" type="date" name="date_of_anniversry" className="input" placeholder="Select your Date Of Birth" />
													</div>
													<div className="group col-md-6 float-left ">
														<label htmlFor="pass" className="label">Date Of Birth</label>
														<Field id="pass2" type="date" name="date_of_birth" className="input" placeholder="Select your Date Of Birth" />
													</div>

												</div>
												<div className="group">
													<label htmlFor="pass" className="label">Contact</label>
													<Field id="pass2" type="number" name="contact" textLength="10" className="input" placeholder="Enter your Contact Number" />
												</div>

												{/* -------------------------------------- */}
												<div className="group">
													<Field type="submit" className="button p-3 mt-2" value="Sign Up" />
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