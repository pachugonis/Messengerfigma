import { Copy, Check, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface RecoveryCodeModalProps {
  recoveryCode: string;
  onClose: () => void;
}

export function RecoveryCodeModal({ recoveryCode, onClose }: RecoveryCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(recoveryCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinue = () => {
    onClose();
    navigate('/chats');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">Регистрация успешна!</h2>
          <p className="text-gray-600 mb-6">
            Сохраните код восстановления в безопасном месте. Он понадобится для восстановления доступа к аккаунту.
          </p>
          
          <div className="w-full bg-gray-100 rounded-2xl p-4 mb-6">
            <p className="text-xs text-gray-500 mb-2">Код восстановления</p>
            <div className="flex items-center justify-between gap-3">
              <code className="text-lg font-mono font-semibold text-gray-900 tracking-wider">
                {recoveryCode}
              </code>
              <button
                onClick={handleCopy}
                className="p-2 rounded-xl hover:bg-gray-200 transition-colors"
                title="Скопировать"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 w-full">
            <p className="text-sm text-yellow-800">
              <strong>Важно:</strong> Этот код показывается только один раз. Запишите его или сохраните в надёжном месте.
            </p>
          </div>
          
          <button
            onClick={handleContinue}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors font-medium"
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
}
