"use server"

const getUSDToMoneroExchangeRate = async (API_KEY : string) => {
  try {
    const response = await fetch('https://rest.coinapi.io/v1/exchangerate/USD/XMR', {
      headers: {
        "X-CoinAPI-Key": API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default getUSDToMoneroExchangeRate;
