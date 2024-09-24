import ReactWhatsapp from 'react-whatsapp';

const WhatsAppChat = () => (
	<div className="fixed bottom-4 right-4">
		<ReactWhatsapp
			number="+441234567890"
			message="Hello, I need more information about your care services!"
			className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition">
			<img
				src="/images/whatsapp-icon.png"
				alt="WhatsApp Chat"
				className="w-8 h-8"
			/>
		</ReactWhatsapp>
	</div>
);

export default WhatsAppChat;
