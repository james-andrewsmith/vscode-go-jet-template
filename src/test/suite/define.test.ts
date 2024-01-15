import chai, { expect } from 'chai';
import assertArrays from 'chai-arrays';
import * as vscode from 'vscode';
import GoTemplateSemanticTokensProvider from '../../GoTemplateSemanticTokensProvider';
import TokenType from '../../tokenType';

chai.use(assertArrays);

suite('Parse Define Block', () => {
  let provider: GoTemplateSemanticTokensProvider;

  suiteSetup(async () => {
    await vscode.commands.executeCommand('workbench.action.closeAllEditors');
    provider = new GoTemplateSemanticTokensProvider();
  });

  teardown(async () => {
    await vscode.commands.executeCommand('workbench.action.closeAllEditors');
  });

  test('Parse define-block-end', async () => {
    const doc = await vscode.workspace.openTextDocument({
      content: `
        {{block "name"}}
          xxxx
            xxxx
          xxx
        {{ end }}
        {{- block "name"}} xxx {{end -}}
      `,
    });
    const tokens = await provider.provideDocumentSemanticTokens(doc);
    expect(tokens?.data).to.be.Uint32Array();
    // prettier-ignore
    expect(tokens?.data).to.be.equalTo([
      1, 8, 2, TokenType.begin, 0,
      0, 2, 5, TokenType.control, 0,
      0, 6, 6, TokenType.string, 0,
      0, 6, 2, TokenType.end, 0,
      4, 8, 2, TokenType.begin, 0,
      0, 3, 3, TokenType.control, 0,
      0, 4, 2, TokenType.end, 0,
      1, 8, 4, TokenType.begin, 0,
      0, 4, 5, TokenType.control, 0,
      0, 6, 6, TokenType.string, 0,
      0, 6, 2, TokenType.end, 0,
      0, 7, 2, TokenType.begin, 0,
      0, 2, 3, TokenType.control, 0,
      0, 3, 4, TokenType.end, 0,
    ]);
  });
});
