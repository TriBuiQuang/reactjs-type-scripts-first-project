import React from 'react';
import { IEpisode } from './interfaces';

export default function EpisodeList(props: any): Array<JSX.Element> {
	const { episodes, toogleFavAction, favourites, store } = props;
	const { state, dispatch } = store;

	return episodes.map((episode: IEpisode) => {
		return (
			<section key={episode.id} className='episode-box'>
				<img src={episode.image.medium} alt={`Rick and mort ${episode.name}`} width='125' height='70' sizes='(max-width: 250px) 140px' srcSet={`${episode.image.medium} 250w`} />
				<div>{episode.name}</div>
				<section style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						Season: {episode.session} Number: {episode.number}
					</div>
					<button type='button' onClick={() => toogleFavAction(state, dispatch, episode)}>
						{favourites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'fav'}
					</button>
				</section>
			</section>
		);
	});
}
