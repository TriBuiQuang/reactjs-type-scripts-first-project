import React from 'react';

import { IEpisode, IAction, IEpisodeProps } from './interfaces';
import { fetchDataAction, toogleFavAction } from './Action';
import { Store } from './store';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function HomePage() {
	const { state, dispatch } = React.useContext(Store);

	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch);
	}, []);

	const props: IEpisodeProps = {
		episodes: state.episodes,
		store: { state, dispatch },
		toogleFavAction,
		favourites: state.favourites,
	};

	return (
		<>
			<React.Suspense fallback={<div>loadding ...</div>}>
				<section className='episode-layout'>
					<EpisodeList {...props} />
				</section>
			</React.Suspense>
		</>
	);
}
