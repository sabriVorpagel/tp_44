import React from 'react';

import { ContentRowMovies } from './ContentRowMovies';
import { GenresInDb } from './GenresInDb';
import { LastMovieInDb } from './LastMoviesInDb';
function ContentRowTop(){

	const metrics = [
		{
			title : "Movies in Data Base",
			color: "primary",
			icon: "fa-film",
			data: 21
		},
		{
			title : "Total awards",
			color: "success",
			icon: "fa-award",
			data: 79
		},
		{
			title : "Actors quantity",
			color: "warning",
			icon: "fa-user",
			data: 49
		}
	]

return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{
							metrics.map((metric, index) => (
								<ContentRowMovies {...metric} /> 
							))
						}

					</div>	
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastMovieInDb />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;