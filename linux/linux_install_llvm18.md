```bash
sudo apt update && sudo apt upgrade
sudo apt install lsb-release wget software-properties-common gnupg
wget -qO- https://apt.llvm.org/llvm-snapshot.gpg.key | tee /etc/apt/trusted.gpg.d/apt.llvm.org.asc
add-apt-repository -y 'deb http://apt.llvm.org/bookworm/  llvm-toolchain-bookworm-18 main'
sudo apt update && sudo apt upgrade
apt-get install -y clang-18 lldb-18 lld-18 clangd-18 clang-tidy-18 clang-format-18 clang-tools-18 llvm-18-dev lld-18 lldb-18 llvm-18-tools libomp-18-dev libc++-18-dev libc++abi-18-dev libclang-common-18-dev libclang-18-dev libclang-cpp18-dev libunwind-18-dev libclang-rt-18-dev libpolly-18-dev
```