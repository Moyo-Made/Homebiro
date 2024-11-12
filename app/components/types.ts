export interface WaitlistFormData {
	fullname: string;
	email: string;
  }
  
  export interface StatusMessage {
	type: '' | 'success' | 'error';
	message: string;
  }
  
  export interface WaitlistResponse {
	message: string;
	_id: string;
	fullname: string;
	email: string;
  }
  