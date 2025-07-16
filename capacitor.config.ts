import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hunglemmo.sanvoucher',
  appName: 'Săn Voucher',
  webDir: 'build',
  // --- THÊM KHỐI CẤU HÌNH PLUGIN VÀO ĐÂY ---
  plugins: {
    GoogleAuth: {
      scopes: [ "profile", "email" ],
      // Đây là Web Client ID của bạn
      serverClientId: "434123508352-7i91tojntp9bl531t67iosath3fp2hl5.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
