import axios from "axios";

const fetchViaplay = async (dispatch) => {
  let response = await axios.get(
    "https://content.viaplay.se/pc-se/serier/samtliga"
  );

  dispatch({
    type: GET_ALL_SERIES,
    payload: {
      seriesList:
        yourDataObject._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ],
    },
  });
};
