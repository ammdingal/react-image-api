import React, { useState } from 'react';
import axios from 'axios';
import { Input, Image, Loader, Button } from 'semantic-ui-react';
import '../assets/stylesheets/style.css';

function ImageSearch() {
	const [searchTermInput, setSearchTermInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async () => {
		setIsLoading(true);
		const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTermInput}&per_page=12`, {
			headers: { Authorization: 'Client-ID YSexKELn-mXRWy1yfTan8vUGj7oX_WjgAs2_VXjGZoI' },
		});
		setSearchResults(data.results);
		setIsLoading(false);
	};

	return (
		<div>
			<h1>🅖🅐🅛🅛🅔🅡🅨</h1>
			<div className='container'>
				<Input value={searchTermInput} onChange={(e) => setSearchTermInput(e.target.value)} placeholder="ＳＥＡＲＣＨ ＩＭＡＧＥＳ..." />
				<Button onClick={handleSearch}>ＳＥＡＲＣＨ</Button>
			</div>
			{isLoading ? (
				<Loader active inline="centered" />
			) : (
				<div className="gallery">
					{searchResults.map((image) => <Image key={image.id} src={image.urls.regular} alt={image.alt_description} className="image" />)}
				</div>	
			)}
		</div>
	);
};

export default ImageSearch;
