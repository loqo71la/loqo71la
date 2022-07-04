import config from '../data/config';

const saveContact = async newContact => {
  const settings = {
    method: 'POST',
    headers: config.api.headers,
    body: JSON.stringify(newContact)
  };
  try {
    const response = await fetch(process.env.API_CONTACT_URL, settings);
    const data = await response.json();
    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    throw new Error(config.contact.errorMsg);
  }
};

export default saveContact;
