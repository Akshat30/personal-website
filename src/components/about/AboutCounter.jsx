import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 5, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 3, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="years of coding experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="projects"
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="internships"
					counter={<span id="feedbackCounter" />}
					measurement=""
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
