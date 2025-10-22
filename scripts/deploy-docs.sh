#!/bin/bash

# 构建文档
echo "Building documentation..."
pnpm docs:build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "Documentation built successfully!"
    echo "Output directory: docs-dist"
else
    echo "Build failed!"
    exit 1
fi
