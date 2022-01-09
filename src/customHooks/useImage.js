import { useEffect, useState } from "react";

const useImage = (filename) => {
	const [loading, setLoading] = useState(true);
	const [image, setImage] = useState(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(`../images/${filename}`);
				setImage(response.default);
				setImage(image);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}

			setLoading(false);
		};
		fetchImage();
	}, [filename]);

	return {
		loading,
		image,
	};
};
export default useImage;
