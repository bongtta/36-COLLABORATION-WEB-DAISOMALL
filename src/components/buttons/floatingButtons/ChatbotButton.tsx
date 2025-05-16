import { ChatbotIcon } from '@assets/svgs';
import * as S from './ChatbotButton.style';

interface ChatbotButtonProps {
  onClick?: () => void;
}

const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <button 
      css={S.buttonStyle} 
      aria-label="챗봇 상담"
    >
      <ChatbotIcon 
        width="2rem" 
        height="2rem" 
        css={S.iconStyle} 
      />
    </button>
  );
};

export default ChatbotButton;