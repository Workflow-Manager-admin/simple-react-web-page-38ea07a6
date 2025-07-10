#!/bin/bash
cd /home/kavia/workspace/code-generation/simple-react-web-page-38ea07a6/simple_web_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

